
type GenericObject = Record<string, any>;

declare type Prettify<T> = {
  [K in keyof T]: T[k];
};
declare interface Feature {
  title: string;
  tagline: string;
  imgId: string;
}

declare interface MenuLink {
  label: string;
  path: string;
}

declare type NullableString = string | undefined;
declare type TitleType = "level1" | "level2" | "level3" | "level4" | "level5";
declare type ColorType = "primary" | "secondary" | "accent" | "success" | "error" | "warning" | "ghost" | "neutral";
declare type Position = "top" | "end" | "start" | "down"
declare interface TilteProps {
  type: TitleType;
  color: ColorType;
  styles?: string;
}
