import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createTheme as createMuiTheme } from '@material-ui/core/styles';
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Setting from "./pages/Setting";
import EmployeeForm from "./pages/EmployeeForm";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {/* <div className={classes.appMain}>  */}
      {/* <Users /> */}
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="*" element={<>Not Found </>} />

          </Routes>
        </SideBar>
      </Router>

      {/* <EmployeeForm /> */}

      {/* </div>  */}
      {/* <CssBaseline />  */}
    </ThemeProvider>
  );
}

export default App;
