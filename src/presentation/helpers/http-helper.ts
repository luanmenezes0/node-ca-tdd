import { ServerError } from '../errors/server-error'

export function badRequest (error: Error) {
  return {
    statusCode: 400,
    body: error
  }
}

export function serverError () {
  return {
    statusCode: 500,
    body: new ServerError()
  }
}

export function ok (data: any) {
  return {
    statusCode: 200,
    body: data
  }
}
