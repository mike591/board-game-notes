import CheckIcon from "@mui/icons-material/Check";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  Divider,
  Typography,
  Card,
  CardContent,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from "@mui/material";
import { updateSuspects, updateSuspectsNotes } from "features/awkwardGuests/awkwardGuestsSlice";
import suspects from "features/awkwardGuests/suspects";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

const SuspectCards = () => {
  const dispatch = useDispatch();
  const awkwardGuestsState = useSelector((state) => state.awkwardGuests);

  return (
    <>
      {Object.values(suspects).map((suspect) => {
        return (
          <Fragment key={suspect.key}>
            <Card>
              <div className="image-label-header">
                <img
                  src={suspect.img}
                  alt={suspect.label}
                  style={{ width: "5rem", height: "5rem" }}
                  loading="lazy"
                />
                <Typography variant="h5">{suspect.label}</Typography>
              </div>
              <CardContent>
                {suspect.motives.map((motive, motiveIdx) => {
                  const isMotive = awkwardGuestsState.suspects[
                    suspect.key
                  ].motives[motiveIdx].every((proof) => proof === 1);
                  return (
                    <FormControl key={motive.label}>
                      <FormLabel className="image-label-header">
                        <img
                          src={motive.img}
                          alt={motive.label}
                          style={{ width: "2rem", height: "2rem" }}
                        />
                        <Typography>{motive.label}</Typography>
                        {isMotive && <CheckIcon />}
                      </FormLabel>
                      <FormGroup className="proof-group">
                        {motive.proof.map((proof, proofIdx) => {
                          const value =
                            awkwardGuestsState.suspects[suspect.key].motives[
                              motiveIdx
                            ][proofIdx];
                          const isChecked = value === 1;
                          const isIndeterminate = value === 2;
                          return (
                            <FormControlLabel
                              key={proof}
                              control={
                                <Checkbox
                                  checked={isChecked}
                                  indeterminate={isIndeterminate}
                                  onChange={() => {
                                    dispatch(
                                      updateSuspects({
                                        key: suspect.key,
                                        motiveIdx,
                                        proofIdx,
                                        value: (value + 1) % 3,
                                      })
                                    );
                                  }}
                                />
                              }
                              label={proof}
                            />
                          );
                        })}
                      </FormGroup>
                    </FormControl>
                  );
                })}
                <TextareaAutosize
                  placeholder="notes..."
                  style={{ width: "100%", marginTop: '8px'}}
                  minRows={3}
                  defaultValue={awkwardGuestsState.suspects[suspect.key].notes}
                  onBlur={(event) => {
                    dispatch(
                      updateSuspectsNotes({
                        key: suspect.key,
                        value: event.target.value,
                      })
                    );
                  }}
                />
              </CardContent>
            </Card>
            <Divider />
          </Fragment>
        );
      })}
    </>
  );
};

export default SuspectCards;
