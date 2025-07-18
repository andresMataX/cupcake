export interface GetBirthdays {
  date: Date
  birthdays: Birthday[]
}

export interface Birthday {
  id: string
  username: string
  birthday: Date
  imageUrl: string
}
