import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('Email Validator Adapter', () => {
  test('should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('INVALID_EMAIL')
    expect(isValid).toBe(false)
  })

  test('should return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('email@email.com')
    expect(isValid).toBe(true)
  })

  test('should call validator with correct param', () => {
    const sut = new EmailValidatorAdapter()
    const spy = jest.spyOn(validator, 'isEmail')
    sut.isValid('email@email.com')
    expect(spy).toHaveBeenCalledWith('email@email.com')
  })
})
