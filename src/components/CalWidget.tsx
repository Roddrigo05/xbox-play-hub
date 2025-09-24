import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalWidget() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"call-with-rodrigo"});
      cal("floatingButton", {"calLink":"rodrigo-francisquinho/call-with-rodrigo","config":{"layout":"month_view"}});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return null; // The floating button is rendered by Cal.com
}