import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalWidget = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"call-with-rodrigo"});
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="w-full h-[600px] bg-card rounded-lg border border-border overflow-hidden">
      <Cal 
        namespace="call-with-rodrigo"
        calLink="rodrigo-francisquinho/call-with-rodrigo"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"month_view","theme":"dark"}}
      />
    </div>
  );
};

export default CalWidget;