import TextareaAutosize from "@mui/base/TextareaAutosize";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CloseIcon from "@mui/icons-material/Close";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { updateLocations } from "features/awkwardGuests/awkwardGuestsSlice";
import locations from "features/awkwardGuests/locations";
import suspects from "features/awkwardGuests/suspects";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

const LocationCards = () => {
  const awkwardGuestsState = useSelector((state) => state.awkwardGuests);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={3} sx={{ p: 2 }} alignItems="center">
      {Object.values(locations).map((location) => (
        <Fragment key={location.key}>
          <Grid item xs={12}>
            <Typography variant="h5">{location.label}</Typography>
          </Grid>
          <Grid item xs={location.isStarting ? 8 : 12}>
            <FormControl fullWidth>
              <InputLabel>Guests</InputLabel>
              <Select
                multiple
                value={awkwardGuestsState.locations[location.key].guests}
                onChange={(event) => {
                  dispatch(
                    updateLocations({
                      locationKey: location.key,
                      key: "guests",
                      value: event.target.value,
                    })
                  );
                }}
                input={<OutlinedInput label="Guests" />}
                renderValue={(selected) => selected.map((s) => s[0]).join(", ")}
              >
                {Object.values(suspects).map(({ label }) => (
                  <MenuItem key={label} value={label}>
                    <Checkbox
                      checked={
                        awkwardGuestsState.locations[
                          location.key
                        ].guests.indexOf(label) > -1
                      }
                    />
                    <ListItemText primary={label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {location.isStarting && (
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>Count</InputLabel>
                <Select
                  defaultValue={""}
                  value={awkwardGuestsState.locations[location.key].guestCount}
                  onChange={(event) => {
                    dispatch(
                      updateLocations({
                        locationKey: location.key,
                        key: "guestCount",
                        value: event.target.value,
                      })
                    );
                  }}
                  input={<OutlinedInput label="Count" />}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
          {location.connectedTo.map((connectedToLabel) => {
            const isBlocked =
              awkwardGuestsState.locations[location.key].blocked.includes(
                connectedToLabel
              );

            return (
              <Fragment key={connectedToLabel}>
                <Grid item xs={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        indeterminate={isBlocked}
                        onChange={() => {
                          dispatch(
                            updateLocations({
                              locationKey: location.key,
                              key: "blocked",
                              value: isBlocked
                                ? awkwardGuestsState.locations[
                                    location.key
                                  ].blocked.filter(
                                    (locationLabel) =>
                                      locationLabel !== connectedToLabel
                                  )
                                : [
                                    ...awkwardGuestsState.locations[
                                      location.key
                                    ].blocked,
                                    connectedToLabel,
                                  ],
                            })
                          );
                        }}
                      />
                    }
                    label=""
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography>{location.label}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <ArrowRightAltIcon sx={{ color: isBlocked && "red" }} />
                  {isBlocked && <CloseIcon sx={{ color: "red" }} />}
                </Grid>
                <Grid item xs={4}>
                  <Typography>{connectedToLabel}</Typography>
                </Grid>
              </Fragment>
            );
          })}
          <Grid item xs={12}>
            <TextareaAutosize
              placeholder="notes..."
              style={{ width: "100%" }}
              minRows={3}
              defaultValue={awkwardGuestsState.locations[location.key].notes}
              onBlur={(event) => {
                dispatch(
                  updateLocations({
                    locationKey: location.key,
                    key: "notes",
                    value: event.target.value,
                  })
                );
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};

export default LocationCards;
