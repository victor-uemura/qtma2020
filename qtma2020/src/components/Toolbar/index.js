

function ToolBar() {

  return(

<>
          <Toolbar variant="dense" style={{background: 'linear-gradient(45deg, rgba(0,114,255,1) 0%, rgba(11,141,255,1) 100%)'}}>
            <IconButton
              className={classes.menuButton}
              aria-label="menu"
              edge="start"
              onClick={ROUTES.HOME}
            >
              <MenuIcon color="white"/>
            </IconButton>
            <Typography variant="h7" className={classes.title} >
              QTMA Web App Boiler Plate
            </Typography>
            <IconButton aria-label="show 4 new mails" className={classes.menuButton}>
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" className={classes.menuButton}>
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              className={classes.menuButton}
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>

        <div className={classes.offset} />
        <Container>{props.children}</Container>
      </>
      );
}