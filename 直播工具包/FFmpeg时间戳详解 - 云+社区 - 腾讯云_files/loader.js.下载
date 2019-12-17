(function () {

	if (!window.$) {
		console.warn('qcmain::loader:\n\tjquery don\'t be loaded first!');
		return;
	}

	var NAV_TYPE = {
		leftnav: 'leftnav',
		topnav_firstlevel: 'topnav_firstlevel',
		topnav_sndlevel: 'topnav_sndlevel',
	};

	var NAV_METADATA = {};
	NAV_METADATA[NAV_TYPE.leftnav] = {
			selector: '#qcLeftNavSwitcher',
			dataJs: "//main.qcloudimg.com/scripts/qccomponents/left-nav.3cab8319a893bdfb2876e4cd5499b986.js",
	};
	NAV_METADATA[NAV_TYPE.topnav_firstlevel] = {
			selector: '#qcTopNavFstLevel',
	};
	NAV_METADATA[NAV_TYPE.topnav_sndlevel] = {
			selector: '#qcTopNavSndLevelSheetContainer',
			dataJs: "//main.qcloudimg.com/scripts/qccomponents/top-nav.2261e6b4e90fa5d7bdffa2ae9d606f2c.js",
	};

	var availableNavs = [NAV_TYPE.leftnav, NAV_TYPE.topnav_firstlevel, NAV_TYPE.topnav_sndlevel].filter(function (nav) {
		return $(NAV_METADATA[nav].selector).length > 0;
	});

	if(availableNavs.length === 0){
		return;
	}

	var shouldLoadDataJsNavs = availableNavs.filter(function (nav) {
		return !!NAV_METADATA[nav].dataJs;
	});

	var COMPLETED = 1 + shouldLoadDataJsNavs.length;
	var step = 0;

	function loadScript (src, callback) {
		var script = document.createElement('script');
		script.onerror = function (error) { callback(error, null); };
		script.onload = function () { callback(null, null); };
		script.src = src;
		document.head.appendChild(script);
	}

	function loadScriptCallback (error) {
		step++;
		if (error) {
			return;
		}
		if (step === COMPLETED && window.QCComponent) {
			window.QCComponent.init();
		}
	}

	shouldLoadDataJsNavs.forEach(function (nav) {
		loadScript(NAV_METADATA[nav].dataJs,loadScriptCallback)
	});

	var logicalScript = "//imgcache.qq.com/qcloud/main/scripts/release/qccomponent/index.93e5437c205358f68660.js?max_age=31536000";
	loadScript(logicalScript, loadScriptCallback);
})();
