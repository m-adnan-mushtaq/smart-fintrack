export interface InputProps{
    title:string
    type:'text'|'email'|'password'|'file'
    name:string
    message:string,
    value:string,
    sizes?:string
    changed:(event:React.ChangeEvent<HTMLInputElement>)=>void
  }
  
export type InputLabel = Omit<InputProps, "changed" | "value">;
export type AuxProps={
  children:React.ReactNode
}