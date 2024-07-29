import { useEffect } from "react";

const useOneSignal = () =>
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "fcb9c445-454b-413f-8054-db2d74460d1e",
        safari_web_id: "web.onesignal.auto.0908e376-c893-48cd-92f7-007572df5c49",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

export default useOneSignal;