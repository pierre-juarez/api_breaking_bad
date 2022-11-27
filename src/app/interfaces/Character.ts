export interface Character{
  char_id: number,
  name: string,
  nickname: string,
  img: string,
  status: string,
  ocupation: Ocupation[]
}

interface Ocupation{
  name: string
}