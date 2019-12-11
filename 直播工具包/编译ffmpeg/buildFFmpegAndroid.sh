#!/bin/bash

# 设置临时文件夹，需要提前手动创建
export TMPDIR="/home/kelinlang/Workspace/ffmpeg-3.4.5/ffmpegtemp"

# 设置NDK路径
NDK=/home/kelinlang/Workspace/AndroidDev/android-ndk-r14b

# 设置编译针对的平台，可以根据实际需求进行设置
# 当前设置为最低支持android-14版本，arm架构
API=19
PLATFORM=arm-linux-androideabi
SYSROOT=$NDK/platforms/android-$API/arch-arm
ISYSROOT=$NDK/sysroot
ASM=$ISYSROOT/usr/include/$PLATFORM

# 设置编译工具链，4.9为版本号
TOOLCHAIN=$NDK/toolchains/arm-linux-androideabi-4.9/prebuilt/linux-x86_64

function build_one
{
./configure \
    --enable-cross-compile \
    --enable-static \
    --disable-shared \
    --disable-doc \
    --disable-ffmpeg \
    --disable-ffplay \
    --disable-ffprobe \
    --disable-ffserver \
    --disable-avdevice \
    --disable-doc \
    --disable-symver \
    --prefix=$PREFIX \
    --cross-prefix=$TOOLCHAIN/bin/arm-linux-androideabi- \
    --target-os=android \
    --arch=arm \
    --sysroot=$SYSROOT \
    #--extra-cflags="-Os -fpic $ADDI_CFLAGS" \#
	--extra-cflags="-I$ASM -isysroot $ISYSROOT -D__ANDROID_API__=$API -U_FILE_OFFSET_BITS -Os -fPIC -DANDROID -D__thumb__ -mthumb -Wfatal-errors -Wno-deprecated -mfloat-abi=softfp -marm" \
    --extra-ldflags="-marm"


$ADDITIONAL_CONFIGURE_FLAG
make clean
make
make install

# 合并生成的静态库
$TOOLCHAIN/bin/arm-linux-androideabi-ld \
-rpath-link=$SYSROOT/usr/lib \
-L$SYSROOT/usr/lib \
-L$PREFIX/lib \
-soname libffmpeg.so -shared -nostdlib -Bsymbolic --whole-archive --no-undefined -o \
$PREFIX/libffmpeg.so \
    libavcodec/libavcodec.a \
    libavfilter/libavfilter.a \
    libswresample/libswresample.a \
    libavformat/libavformat.a \
    libavutil/libavutil.a \
    libswscale/libswscale.a \
    -lc -lm -lz -ldl -llog --dynamic-linker=/system/bin/linker \
    $TOOLCHAIN/lib/gcc/arm-linux-androideabi/4.9.x/libgcc.a
}

# 设置编译后的文件输出目录
CPU=arm
PREFIX=$(pwd)/android/$CPU
ADDI_CFLAGS="-marm"
build_one