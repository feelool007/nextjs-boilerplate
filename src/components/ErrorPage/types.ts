import { WithStyles } from "@material-ui/core";
import { DefaultErrorIProps } from "next/error";

import { errorPageStyles } from "./styles";

export interface PErrorObject {
  res: DefaultErrorIProps,
  err: DefaultErrorIProps
}

export interface PErrorPage extends WithStyles<typeof errorPageStyles> {
  statusCode: number | null
}
