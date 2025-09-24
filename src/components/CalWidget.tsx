import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalWidget() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"call-with-rodrigo"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  
  return (
    <Cal 
      namespace="call-with-rodrigo"
      calLink="rodrigo-francisquinho/call-with-rodrigo"
      style={{width:"100%",height:"100%",overflow:"scroll"}}
      config={{"layout":"month_view"}}
    />
  );
}