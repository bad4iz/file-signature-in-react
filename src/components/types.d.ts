export interface SignInterface {
  fileNameSign: string | null
  sign: Blob | null
}

export interface FileInterface {
  blob: Blob | null
  fileName: string | null
}

export type FileType = File | null
export type FileListType = FileList | null

/**
 * Подпись.
 * todo: сузить определение типа.
 */
export type ThumbprintType = string

export interface SignFileInterface {
  file: File | null
  thumbprint: ThumbprintType | null
}

/**
 * Interface кнопки подписи.
 */
export interface IButtonComponentProps {
  disabled: boolean
  onClick: () => void
}

/**
 * Interface компонента селекта для выбора подписи.
 */
export interface ISelectComponentProps {
  disabled: boolean
  setThumbprint: () => void
}

export interface ISelectCertProps {
  // todo разобраться с типом
  Component: any
  // todo разобраться с типом
  setThumbprint?: (e: any) => void
  /**
   * Callback error - для перехвата ошибок.
   *
   * @param {string | void} error
   */
  callbackError?: (error: string | void | undefined) => void
  value: ThumbprintType | null
}
export interface ValueSelectI {
  value: string
  label: string
}

//
// type T1 = {
//   x: number
// }
//
// interface I1 {
//   y: number
// }
//
// // имплементация Типа ? чего о_О ?
// class X implements T1, I1 {
//   x = 1
//   y = 3
// }
//
// // type T3 extends T1,T2 {}
//
// interface IUser {
//   name: string
//   age: number
// }
//
// interface IProduct {
//   name: string
//   price: number
// }
//
// interface ICartProduct extends IProduct {
//   count: number
// }
//
// type TState = {
//   user: IUser
//   product: IProduct
//   cartProduct: ICartProduct
// }
//
// const state: TState = {
//   user: {
//     name: 'Вася',
//     age: 18,
//   },
//   product: {
//     name: 'Супер товар',
//     price: 23,
//   },
//   cartProduct: {
//     name: 'Супер товар',
//     price: 23,
//     count: 3,
//   },
// }
//
// type Select<State> = <Field extends keyof State>(state: State, field: Field) => State[Field]
//
// const select: Select<TState> = (state, field) => state[field]
//
// const user1: IUser = select(state, 'userss')

// const product1: IProduct = select(state, 'product')
// const cart: IProduct = select(state, 'cartProduct')
//
// const sum = (cart: ICartProduct) => {
//   return cart.count * cart.price
// }
// sum(cart) //?
// // cart.count
