import Cookies from "js-cookie"

const TokenKey="Authorization"

export function getToken(){
	return Cookies.get(getToken)
}

export function setToken(){
	return Cookies.set(setToken,Authorization)
}

export function removeToken(){
	return Cookies.remove(TokenKey)
}

