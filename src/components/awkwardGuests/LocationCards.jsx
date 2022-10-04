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
      {Object.values(locations).sort((a, b) => a.key > b.key ? 1 : -1).map((location) => (
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
                  value={
                    awkwardGuestsState.locations[location.key].guestCount || ""
                  }
                  onChange={(event) => {
                    dispatch(
                      updateLocations({
                        locationKey: location.key,
                        key: "guestCount",
                        value:
                          event.target.value === 0 ? null : event.target.value,
                      })
                    );
                  }}
                  input={<OutlinedInput label="Count" />}
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((num) => {
                    const currentVal =
                      awkwardGuestsState.locations[location.key].guestCount;
                    if (!currentVal && num === 0) {
                      return undefined;
                    } else {
                      return (
                        <MenuItem key={num} value={num}>
                          {num}
                        </MenuItem>
                      );
                    }
                  })}
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Maybe</InputLabel>
              <Select
                multiple
                value={awkwardGuestsState.locations[location.key].maybe}
                 onChange={(event) => {
                  dispatch(
                    updateLocations({
                      locationKey: location.key,
                      key: "maybe",
                      value: event.target.value,
                    })
                  );
                }}
                input={<OutlinedInput label="Maybe" />}
                renderValue={(selected) => selected.map((s) => s[0]).join(", ")}
              >
                {Object.values(suspects).map(({ label }) => (
                  <MenuItem key={label} value={label}>
                    <Checkbox
                      checked={
                        awkwardGuestsState.locations[
                          location.key
                        ].maybe.indexOf(label) > -1
                      }
                    />
                    <ListItemText primary={label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Not Seen</InputLabel>
              <Select
                multiple
                value={awkwardGuestsState.locations[location.key].notSeen}
                onChange={(event) => {
                  dispatch(
                     updateLocations({
                      locationKey: location.key,
                      key: "notSeen",
                      value: event.target.value,
                    })
                  );
                }}
                input={<OutlinedInput label="Not Seen" />}
                renderValue={(selected) => selected.map((s) => s[0]).join(", ")}
               >
                {Object.values(suspects).map(({ label }) => (
                  <MenuItem key={label} value={label}>
                    <Checkbox
                      checked={
                        awkwardGuestsState.locations[
                         location.key
                        ].notSeen.indexOf(label) > -1
                      }
                    />
                    <ListItemText primary={label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {Object.entries(
            awkwardGuestsState.locations[location.key].blocked
          ).map(([blockedRoomKey, isBlocked]) => {
            return (
              <Fragment key={blockedRoomKey}>
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
                              value: {
                                ...awkwardGuestsState.locations[location.key]
                                  .blocked,
                                [blockedRoomKey]: !isBlocked,
                              },
                            })
                          );
                          if (blockedRoomKey !== locations.studyCrimeScene.key) {
                            dispatch(
                              updateLocations({
                                locationKey: blockedRoomKey,
                                key: "blocked",
                                value: {
                                  ...awkwardGuestsState.locations[blockedRoomKey]
                                    .blocked,
                                  [location.key]: !isBlocked,
                                },
                              })
                            );
                          }
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
                  <Typography>{locations[blockedRoomKey].label}</Typography>
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
