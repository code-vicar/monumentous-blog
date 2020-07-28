import React from 'react'
import { createStyles, Typography, makeStyles } from '@material-ui/core'
import { AddMenuItem, MenuProvider, MenuItems } from '../menu'

enum GridAreas {
  menu = 'menu',
  header = 'header',
  sidebar = 'sidebar',
  footer = 'footer'
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '10px',
      display: 'grid',
      'grid-template-columns': '1fr 1fr',
      'grid-template-rows': 'auto',
      'grid-template-areas': `
        "${GridAreas.header} ${GridAreas.header}"
        "${GridAreas.menu} ${GridAreas.sidebar}"
        "${GridAreas.footer} ${GridAreas.footer}"
      `
    },
    header: {
      gridArea: 'header'
    },
    menu: {
      gridArea: 'menu'
    },
    sidebar: {
      gridArea: 'sidebar'
    },
    footer: {
      gridArea: 'footer'
    }
  })
)

export const MealPlanner: React.FC = () => {
  const styles = useStyles()
  return (
    <MenuProvider>
      <section className={styles.root}>
        <Typography className={styles.header} component="h2">
          Menu Items
        </Typography>
        <div className={styles.menu}>
          <MenuItems />
          <AddMenuItem />
        </div>
      </section>
    </MenuProvider>
  )
}
