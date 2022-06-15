;(function () {
	function setRem() {
		if (
			window.navigator.userAgent.match(
				/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
			)
		) {
			let deviceWidth =
				parseInt(document.documentElement.clientWidth / 3.8) + "px"
			document.documentElement.style.cssText =
				"font-size:" + deviceWidth + "!important"
		} else {
			let deviceWidth =
				parseInt(document.documentElement.clientWidth / 19.2) + "px"
			document.documentElement.style.cssText =
				"font-size:" + deviceWidth + "!important"
		}
	}
	window.onresize = setRem
	setRem()
})()
