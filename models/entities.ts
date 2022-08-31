export interface IUser {
  _id: string
  username: string
  email: string
}

export interface INote {
  _id: string
  title: string
  content: string
  user: string
}

export interface partialINote extends Partial<INote> {
  _id: string
  title: string
}

export interface IFolder {
  _id: string
  title: string
  user: string
  notes: Array<INote>
}

export interface partialIFolder extends Partial<IFolder> {
  _id: string
  title: string
}
