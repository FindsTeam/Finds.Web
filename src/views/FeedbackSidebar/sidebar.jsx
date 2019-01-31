/* @flow */
import * as React from 'react';
import {
  withStyles, SwipeableDrawer, Grid,
  Button, TextField, Select, MenuItem, FormHelperText,
  FormControl, FilledInput, InputLabel, Typography,
} from '@material-ui/core';
import styles from './styles';
import type { Classes } from '../../types/styles';
import type { Feedback } from '../../types/models';

type Props = {
  +isOpen: boolean,
  feedback: Feedback,
  freebeeTypes: [],
  +classes: Classes,
  open: () => void,
  close: () => void,
  +cancel: () => void,
  +submit: () => void,
  handleFieldChange: (fields: string) => void,
};

const FeedbackSidebar = ({
  feedback,
  freebeeTypes,
  isOpen,
  classes,
  open,
  close,
  cancel,
  submit,
  handleFieldChange,
}: Props) => (
  <>
    <SwipeableDrawer
      open={isOpen}
      onClose={close}
      onOpen={open}
      anchor="left"
      classes={{
        paper: classes.sidebarRoot,
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.sidebarTitle}>
            <Typography
              className={classes.sidebarTitleContent}
              variant="headline"
              gutterBottom
              align="center"
            >
              {'Поделитесь халявой с другими!'}
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.fieldsContainer} container spacing={24}>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.formField}>
              <TextField
                placeholder="ул. Халявина, 7"
                label="Место халявы"
                required
                onChange={handleFieldChange('address')}
                value={feedback.address}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl required fullWidth className={classes.formField}>
              <InputLabel htmlFor="freebeeType">Вид халявы</InputLabel>
              <Select
                onChange={handleFieldChange('type')}
                value={feedback.type}
                inputProps={{
                  id: 'freebeeType',
                  name: 'freebeeType',
                }}
                fullWidth
              >
                {freebeeTypes.map(type => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.formField}>
              <TextField
                placeholder="Автор"
                label="Freebee"
                required
                onChange={handleFieldChange('author')}
                value={feedback.author}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.formField}>
              <TextField
                placeholder="Описание найденной халявы"
                label="Описание"
                onChange={handleFieldChange('description')}
                value={feedback.description}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Grid container className={classes.buttonsContainer}>
              <Button onClick={cancel} variant="contained" color="secondary">Отменить</Button>
              <Button variant="contained" type="submit" color="primary" onClick={submit}>Отправить</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  </>
);

export default withStyles(styles)(FeedbackSidebar);