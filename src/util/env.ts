
export function isProd(): boolean {
  return !["local","test"].includes(process.env.REACT_APP_DEPLOY_ENV as string)
}
