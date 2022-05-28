import "./Overlay.scss";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
import InfoPopup from "components/awkwardGuests/InfoPopup";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const Overlay = () => {
  const { weapons: weaponsState, locations: locationsState } = useSelector(
    (state) => state.awkwardGuests
  );

  return (
    <div className="Overlay">
      {Object.entries(weaponsState).map(
        ([key, value]) =>
          value && <div key={key} className={classNames(key, "weapon-line")} />
      )}
      {Object.entries(locationsState).map(
        ([locationKey, { blocked, guests, guestCount, notes }]) => (
          <Fragment key={locationKey}>
            {guestCount > 0 && (
              <div className={classNames(locationKey, "count")}>
                {guestCount}
              </div>
            )}
            {guests.length > 0 && (
              <div className={classNames(locationKey, "guests")}>
                {guests.map((g) => g[0]).join(",")}
              </div>
            )}
            {notes.length > 0 && (
              <InfoPopup
                className={classNames(locationKey, "notes")}
                info={notes}
              />
            )}
            {Object.entries(blocked).map(
              ([blockedRoomKey, isBlocked]) =>
                isBlocked && (
                  <div
                    key={blockedRoomKey}
                    className={classNames(
                      `${locationKey}-to-${blockedRoomKey}`,
                      "blocked"
                    )}
                  >
                    <CloseIcon />
                  </div>
                )
            )}
          </Fragment>
        )
      )}
    </div>
  );
};

export default Overlay;
