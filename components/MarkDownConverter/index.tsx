import { ScrollView } from 'react-native'
import { useTheme } from '../../context/ThemeProvider'
import useColorsTheme from '../../hooks/useColorsTheme'

import Markdown from 'react-native-markdown-display'

interface Props {
  text: string
}

export default function MarkdownConverter ({ text }: Props) {
  const theme = useTheme()
  const colors = useColorsTheme(theme)

  const defaultColors = {
    inlineCode: colors.text,
    listItemText: colors.text,
    listItem: colors.text,
    listItemNumber: colors.text,
    listItemBullet: colors.text,
    heading1: 'orange',
    heading2: 'hotpink',
    heading3: 'cyan',
    heading4: 'tomato',
    heading5: 'lightgreen',
    heading6: colors.text,
    link: 'aqua',
    mailTo: 'aqua',
    text: colors.text,
    pre: colors.text,
    table: 'grey'
  }

  const markdownStyles = {
    heading1: {
      color: defaultColors.heading1
    },
    heading2: {
      color: defaultColors.heading2
    },
    heading3: {
      color: defaultColors.heading3
    },
    heading4: {
      color: defaultColors.heading4
    },
    heading5: {
      color: defaultColors.heading5
    },
    heading6: {
      color: defaultColors.heading6
    },
    body: {
      color: defaultColors.text
    },
    hr: {
      backgroundColor: colors.secondaryText
    },
    blockquote: {
      backgroundColor: theme ? '#1A1B1C' : '#cccccc',
      borderRadius: 4
    },
    bullet_list: {
      color: colors.secondaryText
    },
    ordered_list: {
      color: colors.secondaryText
    },
    code_block: {
      backgroundColor: theme ? '#1A1B1C' : '#cccccc',
      borderColor: theme ? '#1A1B1C' : '#cccccc'
    },
    code_inline: {
      backgroundColor: theme ? '#1A1B1C' : '#cccccc',
      borderColor: theme ? '#1A1B1C' : '#cccccc'
    },
    fence: {
      backgroundColor: theme ? '#1A1B1C' : '#cccccc',
      borderColor: theme ? '#1A1B1C' : '#cccccc'
    },
    th: {
      borderColor: colors.secondaryText,
      color: defaultColors.text
    },
    td: {
      borderColor: colors.secondaryText,
      color: defaultColors.text
    },
    tr: {
      borderColor: colors.secondaryText,
      color: defaultColors.text
    },
    table: {
      borderColor: colors.secondaryText
    },
    thead: {
      backgroundColor: theme ? '#1A1B1C' : '#cccccc'
    },
    link: {
      color: defaultColors.link
    },
    s: {
      color: defaultColors.text
    },
    em: {
      color: defaultColors.text
    },
    softbreak: {
      color: defaultColors.text,
      backgroundColor: colors.text,
      borderColor: colors.text
    },
    hardbreak: {
      color: defaultColors.text,
      backgroundColor: colors.text,
      borderColor: colors.text
    },
    span: {
      color: defaultColors.text,
      backgroundColor: colors.text,
      borderColor: colors.text
    }
  }

  return (
    <ScrollView style={{ marginBottom: 10 }}>
      {/* @ts-ignore: Unreachable code error */}
      <Markdown
        style={markdownStyles}
      >
        {text}
      </Markdown>
    </ScrollView>
  )
}
