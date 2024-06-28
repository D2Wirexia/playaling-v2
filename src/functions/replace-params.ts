type ParamType = {
  [key: string]: string | number
}
export const replaceParams = (route: string, params: ParamType) => {
  return Object.keys(params).reduce(
    (url: string, p: string) => url.replace(`:${p}`, <string>params[p]),
    route,
  )
}
