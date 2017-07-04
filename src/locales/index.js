import { addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import pt from "react-intl/locale-data/pt"

addLocaleData([ ...en, ...pt ])
