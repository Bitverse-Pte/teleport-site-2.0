import { useEffect, useRef } from "react"

export function useInterval(loopTime: number, fun: any) {
	const myRef: any = useRef(null)
	useEffect(() => {
		myRef.current = fun
	}, [fun])
	useEffect(() => {
		const id = setInterval(() => {
			myRef.current()
		}, loopTime)
		return () => clearInterval(id)
	}, [])
}
