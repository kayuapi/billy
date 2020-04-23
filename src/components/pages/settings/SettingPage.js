import React from 'react';
import { SettingsLayout } from '../../styledComponents/settings/Settings';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { SecondaryButton } from '../../styledComponents/shared/Button';
import { Link } from 'react-router-dom';
import DisplayName from './DisplayName';
import { isLoaded } from 'react-redux-firebase';

function SettingPage() {
  const settings = useSelector(
    state => state.firebase.profile && state.firebase.profile.settings
  );

  if (!isLoaded(settings)) return <h1>Loading...</h1>;
  const {
    companyName,
    gstNumber,
    taxPercent,
    taxEnable,
    billableType,
    taxType,
    companyAddress,
    note,
    currency
  } = settings;

  return (
    <SettingsLayout>
      <DisplayName />
      <div className="default-settings">
        <h3>Default Settings</h3>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={4}>
            <p>
              <span>Company Name: </span>
              {companyName}
            </p>
            <p>
              <span>GSTIN: </span>
              {gstNumber}
            </p>
            <p>
              <span>Company Address: </span>
              {companyAddress}
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <p>
              <span>Billable Type: </span>
              {billableType === 'product' ? 'Product' : 'Service'}
            </p>
            <p>
              <span>Default Currency: </span>
              {currency.toUpperCase()}
            </p>
            <p>
              <span>Default Customer Note: </span> {note}
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <p>
              <span>Enable Tax: </span>
              {taxEnable === 'true' ? 'Yes' : 'No'}
            </p>
            <p>
              <span>Default Tax Type: </span>
              {taxType === 'exc' ? 'Exclusive' : 'Inclusive'}
            </p>
            <p>
              <span>Default Tax Percent: </span> {taxPercent}%
            </p>
          </Grid>
        </Grid>
        <SecondaryButton as={Link} to={'/settings/edit'}>
          EDIT SETTINGS
        </SecondaryButton>
      </div>
    </SettingsLayout>
  );
}

export default SettingPage;