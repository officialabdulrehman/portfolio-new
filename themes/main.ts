import { dark } from "./dark"
import { light } from "./light"
import { themeI } from "./themeI"

type themes = {
  [key: string]: themeI
}

export const themes: themes = {
  light,
  dark,
}