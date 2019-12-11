# build4android.sh 

#!/bin/sh 
NDK=/home/kelinlang/Workspace/AndroidDev/android-ndk-r17c
SYSROOT=$NDK/sysroot 
TOOLCHAIN=$NDK/toolchains/arm-linux-androideabi-4.9/prebuilt/linux-x86_64 
ARCH=arm 
API=27 
PREFIX=./android/$ARCH 

# ARM   arm-linux-androideabi 
# ARM64 aarch64-linux-android 
# x86   i686-linux-android 
# x86_64    x86_64-linux-android 

TRIPLE=arm-linux-androideabi 
ADDI_CFLAGS="--sysroot $SYSROOT -isystem $NDK/sysroot/usr/include/$TRIPLE -D__ANDROID_API__=$API" 
ADDI_LDFLAGS="--sysroot $NDK/platforms/android-$API/arch-$ARCH/" 
config_para() 
{ 
	./configure \ 
	--prefix=$PREFIX \ 
	--enable-shared \
	--disable-static \ 
	--disable-doc \ 
	--disable-ffmpeg \ 
	--disable-ffplay \ 
	--disable-ffprobe \ 
	--disable-avdevice \ 
	--disable-doc \ 
	--disable-symver \ 
	--cross-prefix=$TOOLCHAIN/bin/arm-linux-androideabi- \ 
	--target-os=linux \ 
	--arch=$ARCH \ 
	--enable-cross-compile \ 
	--extra-cflags="-Os -fpic $ADDI_CFLAGS" \ 
	--extra-ldflags="$ADDI_LDFLAGS" \ $ADDITIONAL_CONFIGURE_FLAG 
	make clean 
	make -j8 
	make install 
} 
config_para
