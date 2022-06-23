import Main from "components/main"
import React, { useEffect, useState } from "react"

export default function Home() {
	useEffect(() => {
		require("common/rem.js")
		if (
			window.navigator.userAgent.match(
				/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
			)
		) {
		} else {
		}
		import("utils/skynet").then((skynet) => {
			skynet.default.start()
		})
	}, [])

	return (
		<>
			<Main />
		</>
	)
}
