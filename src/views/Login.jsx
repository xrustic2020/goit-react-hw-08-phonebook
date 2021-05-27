import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Section from 'components/Section';

const Login = () => {
  return (
    <Section title="Login">
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="With a grid" />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Login;
