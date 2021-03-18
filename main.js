{
  const { AppBar, Drawer, Tabs, Tab, Toolbar } = window['MaterialUI'];
  const { Box, Fab } = window['MaterialUI'];
  const { List, ListItem, ListItemText } = window['MaterialUI'];
  const {
    HashRouter: Router,
    Switch,
    Route,
    Link: RouterLink,
    useLocation,
  } = window["ReactRouterDOM"];
  const Prism = window["Prism"];
  const { useInView } = window["ReactIntersectionObserver"]
  const { configureStore } = window["RTK"]
  const { Provider, useSelector } = window["ReactRedux"]

  const fabCopy = {
    position: "absolute",
    bottom: "16px",
    right: "16px",
    outline: "none"
  }

  const initialNavState = []
  const addNavAction = anchor => ({ type: "addVisibleNav", payload: anchor })
  const removeNavAction = anchor => ({ type: "removeVisibleNav", payload: anchor })
  const clearNavAction = () => ({ type: "clearVisibleNav" })
  const navReducer = (state = initialNavState, action) => {
    switch (action.type) {
      case "addVisibleNav": {
        return state.findIndex((element) => action.payload == element) != -1 ? state : state.concat(action.payload)
      }
      case "removeVisibleNav": {
        return state.filter((anchor) => action.payload != anchor)
      }
      case "clearVisibleNav": {
        return []
      }
      default:
        return state
    }
  }

  const reduxStore = configureStore({
    reducer: {
      navVisibility: navReducer
    }
  })

  const dswContent = [
    {
      heading: "Introduction (Laura)",
      subheadings: [
        {
          subtitle: "Installation and Usage",
          anchor: "introduction--installation-and-usage",
        }
      ],
      route: "/introduction",
      component: <UXWIntroduction />,
    },
    {
      heading: "Voice and Tone (Laura)",
      subheadings: [
        {
          subtitle: "Language",
          anchor: "voice--voice-language",
        }
      ],
      route: "/voice",
      component: <UXWVoiceAndTone />,
    },
    {
      heading: "Logos and Icons (Seiko)",
      subheadings: [
        {
          subtitle: "Logos",
          anchor: "snav-logos",
        },
        {
          subtitle: "Clearance",
          anchor: "snav-clearance",
        },
        {
          subtitle: "Icongraphy Style",
          anchor: "snav-icongraphy",
        },
        {
          subtitle: "Library",
          anchor: "snav-library",
        },
      ],
      route: "/logos",
      component: <UXWLogosAndIcons />,
    },
    {
      heading: "Colors (Max)",
      subheadings: [],
      route: "/colors",
      component: <UXWColors />,
    },
    {
      heading: "Typography (Sidney)",
      subheadings: [
        {
          subtitle: "This is Overpass",
          anchor: "typography--this-is-overpass",
        },
        {
          subtitle: "Scale",
          anchor: "typography--scale",
        },
        {
          subtitle: "Guidelines",
          anchor: "typography--guidelines",
        },
        {
          subtitle: "Usage",
          anchor: "typography--usage",
        },
        {
          subtitle: "CSS",
          anchor: "typography--css",
        },
      ],
      route: "/typography",
      component: <UXWTypography />,
    },
    {
      heading: "Design Assets (Javi)",
      subheadings: [],
      route: "/designassets",
      component: <UXWDesignAssets />,
    },
    {
      heading: "Contributors (Dhruv)",
      subheadings: [],
      route: "/contributors",
      component: <UXWContributors />,
    },
  ];

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box className="bg-gray-100" style={{fontFamily: "monospace"}} p={3} dangerouslySetInnerHTML={{__html: children}} />
        )}
      </div>
    );
  }

  function UXWCodePanel(props) {
    const [value, setValue] = React.useState(0);
    const htmlSnippet = props.children[0].props.children
    const cssSnippet = props.children[1].props.children

    const prismHtmlSnippet = Prism.highlight(htmlSnippet, Prism.languages.markup, 'markup');
    let finalHtmlSnippet = ""
    for (let line of prismHtmlSnippet.split("\n")) {
      finalHtmlSnippet = finalHtmlSnippet + line.replace(/^  /, "&nbsp;&nbsp;") + "<br/>"
    }

    const prismCssSnippet = Prism.highlight(cssSnippet, Prism.languages.css, 'css');
    let finalCssSnippet = ""
    for (let line of prismCssSnippet.split("\n")) {
      finalCssSnippet = finalCssSnippet + line.replace(/^  /, "&nbsp;&nbsp;") + "<br/>"
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const onCopyClick = () => {
      if (value == 0) {
        navigator.clipboard.writeText(htmlSnippet)
      } else if (value == 1) {
        navigator.clipboard.writeText(cssSnippet)
      }
    }

    return (
      <div className="w-128 relative">
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="HTML" style={{ outline: "none", border: "none" }} />
            <Tab label="CSS" style={{ outline: "none", border: "none" }} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {finalHtmlSnippet}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {finalCssSnippet}
        </TabPanel>
        <Fab style={fabCopy} size="small" onClick={onCopyClick}>
          <i className="bi bi-clipboard"></i>
        </Fab>
      </div>
    );
  }

  function UXWSubsection({title, anchor, children}) {
    const ref = React.useRef();
    const isInView = useInView(ref, { threshold: 0 })

    React.useEffect(() => {
      if (isInView) {
        reduxStore.dispatch(addNavAction(anchor))
      } else {
        reduxStore.dispatch(removeNavAction(anchor))
      }
    })

    return (
      <React.Fragment>
        <h2 ref={ref} className="text-xl py-4" id={anchor}>{title}</h2>
        {children}
      </React.Fragment>
    )
  }



  function Main(props) {
    const location = useLocation();
    const activeSubsections = useSelector((state) => state.navVisibility)

    return (
      <div className="bg-white">
        <React.Fragment>
          <AppBar position="fixed" style={{zIndex: 1201}}>
            <Toolbar>
              <div className="flex flex-row flex-shrink-0">
                <div className="flex flex-col">
                  <div className="text-lg" style={{fontFamily: "Overpass"}}>UX Wizards</div>
                  <div className="text-md" style={{fontFamily: "Overpass"}}>Design System</div>
                </div>
                <img className="pl-4 w-16 h-12" src="logo.png" />
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" >
            <Toolbar />
            <nav>
              <List>
                {dswContent.map(({ heading, subheadings, route }, index) => (
                  <React.Fragment key={`navlink-fragment-${index}`}>
                    <RouterLink to={route} >
                      <ListItem button key={`navlink-${index}`}>
                        <ListItemText disableTypography primary={heading} className={`${location.pathname === route && "font-bold"}`}/>
                      </ListItem>
                    </RouterLink>
                    {subheadings.map(({subtitle, anchor}, subindex) => (location.pathname === route &&
                    <div key={`navlink-sub-${index}-${subindex}`} onClick={() => document.getElementById(anchor).scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary={subtitle} className={`pl-8 ${activeSubsections.findIndex((element) => element === anchor) !== -1 && "font-bold"}`}/>
                      </ListItem>
                    </div>
                    ))}
                  </React.Fragment>
                ))}
              </List>
            </nav>
          </Drawer>
          <div className="flex">
            <main className="flex-grow ml-80 py-4 pr-8">
              <Toolbar /> {/* Spacer */}

              <Switch>
                {dswContent.map(({ route, component, heading }, index) => {
                  return (
                    <Route key={`route-${index}`} path={route}>
                      <div className="flex-col flex-shrink-0 pb-8" key={`section-${index}`}>
                        <h1 className="text-3xl pb-4">{heading}</h1>
                        {component}
                      </div>
                    </Route>
                  )
                })}
              </Switch>
            </main>
          </div>
        </React.Fragment>
      </div>
    )
  }

  ReactDOM.render(
    <Provider store={reduxStore}>
      <Router>
        <Main />
      </Router>
    </Provider>
    ,
    document.getElementById('app')
  );
}