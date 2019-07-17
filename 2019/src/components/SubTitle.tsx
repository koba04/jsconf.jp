import React from "react"

export type Props = {
  children: React.ReactNode
}

export function SubTitle(props: Props) {
  const { children } = props

  return <h2 style={{ textTransform: "uppercase" }}>{children}</h2>
}
