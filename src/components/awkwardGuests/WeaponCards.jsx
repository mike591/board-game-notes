import {
  Divider,
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
} from "@mui/material";
import { updateWeapons } from "features/awkwardGuests/awkwardGuestsSlice";
import weapons from "features/awkwardGuests/weapons";
import { Fragment, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

const WeaponCards = () => {
  const awkwardGuestsState = useSelector((state) => state.awkwardGuests);
  const dispatch = useDispatch();

  const weaponsGroupedByCategory = useMemo(() => {
    const weaponsGroupedByCategory = {};
    Object.values(weapons).forEach((weapon) => {
      weaponsGroupedByCategory[weapon.category] =
        weaponsGroupedByCategory[weapon.category] || [];
      weaponsGroupedByCategory[weapon.category].push(weapon);
    });
    return weaponsGroupedByCategory;
  }, []);

  return (
    <Grid container spacing={5} sx={{ p: 2 }}>
      {Object.entries(weaponsGroupedByCategory).map(([category, weapons]) => {
        const toggleAll = weapons.every((weapon) => awkwardGuestsState.weapons[weapon.key]);
        return (
          <Fragment key={category}>
            <Grid item xs={12}>
              <Box>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {category}
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        toggleAll
                      }
                      onChange={() => {
                        weapons.forEach((weapon) => {
                          dispatch(
                            updateWeapons({
                              key: weapon.key,
                              value: !toggleAll,
                            })
                          );
                        })
                      }}
                    />
                  }
                  label={"Not " + category + "?"}
                />
                <Grid container spacing={2}>
                  {weapons.map((weapon) => {
                    const value = awkwardGuestsState.weapons[weapon.key];
                    return (
                      <Grid item xs={6} key={weapon.key}>
                        <Card>
                          <CardContent>
                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                  {weapon.label}
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="subtitle2">
                                  {weapon.location}
                                </Typography>
                              </Grid>
                              {weapon.signs.map((sign) => (
                                <Grid item xs={6} key={sign.label}>
                                  <img
                                    style={{ width: "2rem", height: "2rem" }}
                                    loading="lazy"
                                    src={sign.img}
                                    alt={sign.label}
                                  />
                                </Grid>
                              ))}
                              <Grid item xs={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={false}
                                      indeterminate={value}
                                      onChange={() => {
                                        dispatch(
                                          updateWeapons({
                                            key: weapon.key,
                                            value: !value,
                                          })
                                        );
                                      }}
                                    />
                                  }
                                  label="Not weapon?"
                                />
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </Fragment>
        );
      })}
    </Grid>
  );
};

export default WeaponCards;
