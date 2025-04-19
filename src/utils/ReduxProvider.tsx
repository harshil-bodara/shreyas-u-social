'use client'
import { SnackbarProvider } from "notistack";
import { Provider } from 'react-redux'
import store from '../store'
import { CloseButton, SnackbarUtilsConfiguration } from "components/Toast";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    <SnackbarProvider
      maxSnack={5}
      autoHideDuration={5000}
      action={(key) => <CloseButton id={key} />}
      preventDuplicate={true}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      classes={{ containerRoot: 'snackbarProvider' }}
    >
      {children}
      <SnackbarUtilsConfiguration />
    </SnackbarProvider>
  </Provider>
}
