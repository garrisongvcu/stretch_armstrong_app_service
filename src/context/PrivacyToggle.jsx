// 
import {useSession} from "./SessionContext";

export default function PrivacyToggle() {
  const { privacyEnabled, setPrivacyEnabled } = useSession();

  return (
    <div>
        <label>
            <input
                type="checkbox"
                checked={privacyEnabled}
                onChange={(e) => setPrivacyEnabled(e.target.checked)}
            />
            Restrict Biometric Data Sharing (Privacy Mode)
        </label>
        <p>
            {privacyEnabled
                ? "Privacy mode is enabled. Your biometric data will not be shared."
                : "Privacy mode is disabled. Your biometric data may be shared."}
        </p>
    </div>
  );
}