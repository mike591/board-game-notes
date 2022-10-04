import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { updateAnswers } from "features/awkwardGuests/awkwardGuestsSlice";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

const AnswerCards = () => {
  const awkwardGuestsState = useSelector((state) => state.awkwardGuests);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={3} sx={{ p: 2 }} alignItems="center">
      {
        <Fragment>
        <Grid item xs={12}>
          <Typography variant="h5">Submit Answer</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography>Who</Typography>
                <TextareaAutosize
                    placeholder="Who killed Mr. Walton?"
                    style={{ width: "100%" }}
                    minRows={3}
                    defaultValue={awkwardGuestsState.solution["who"]}
                    onBlur={(event) => {
                        dispatch(
                            updateAnswers({
                                key: "who",
                                value: event.target.value,
                            })
                        );
                    }}
                />
        </Grid>
        <Grid item xs={12}>
            <Typography>Why</Typography>
                <TextareaAutosize
                    placeholder="Why did they kill Mr. Walton?"
                    style={{ width: "100%" }}
                    minRows={3}
                    defaultValue={awkwardGuestsState.solution["why"]}
                    onBlur={(event) => {
                        dispatch(
                            updateAnswers({
                                key: "why",
                                value: event.target.value,
                            })
                        );
                    }}
                />
        </Grid>
        <Grid item xs={12}>
            <Typography>How</Typography>
                <TextareaAutosize
                    placeholder="How did they kill Mr. Walton?"
                    style={{ width: "100%" }}
                    minRows={3}
                    defaultValue={awkwardGuestsState.solution["how"]}
                    onBlur={(event) => {
                        dispatch(
                            updateAnswers({
                                key: "how",
                                value: event.target.value,
                            })
                        );
                    }}
                />
        </Grid>
        <Grid item xs={12}>
            <Divider />
        </Grid>
        <Grid item xs={12}>
            <Typography>Has Accomplice?</Typography>
                <TextareaAutosize
                    placeholder="Did they have an accomplice?"
                    style={{ width: "100%" }}
                    minRows={3}
                    defaultValue={awkwardGuestsState.solution["hasAccomplice"]}
                    onBlur={(event) => {
                        dispatch(
                            updateAnswers({
                                key: "hasAccomplice",
                                value: event.target.value,
                            })
                        );
                    }}
                />
        </Grid>
        <Grid item xs={12}>
            <Typography>Who</Typography>
                <TextareaAutosize
                    placeholder="Who was the accomplice?"
                    style={{ width: "100%" }}
                    minRows={3}
                    defaultValue={awkwardGuestsState.solution["accompliceWho"]}
                    onBlur={(event) => {
                        dispatch(
                            updateAnswers({
                                key: "accompliceWho",
                                value: event.target.value,
                            })
                        );
                    }}
                />
        </Grid>
        <Grid item xs={12}>
            <Typography>Why</Typography>
                <TextareaAutosize
                    placeholder="Why would the accomplice do it?"
                    style={{ width: "100%" }}
                    minRows={3}
                    defaultValue={awkwardGuestsState.solution["accompliceWhy"]}
                    onBlur={(event) => {
                        dispatch(
                            updateAnswers({
                                key: "accompliceWhy",
                                value: event.target.value,
                            })
                        );
                    }}
                />
        </Grid>
        </Fragment>
      }
    </Grid>
  );
};

export default AnswerCards;
