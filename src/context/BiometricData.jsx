import { useSession } from "./SessionContext";

export default function BiometricData() {
    const {session, privacyEnabled} = useSession();

    if(!session) {
        return <p>Please log in!</p>
    }


    if(privacyEnabled) {
        return (
            <p>Biometric data is restricted due to privacy mode.</p>
        );
    }

    return (
        <div>
            <h2>Biometric Information</h2>
            <p>Authorized biometric data view</p>
        </div>
    );
}