import GuardWrapper from "../../blockchain/GuardWrapper";
import { createContext, useEffect, useState, useContext } from "react";
import { Web3ModalContext } from "../Web3ModalProvider";

interface GuardContext {
    guardWrapper: GuardWrapper | null;
}

export const GuardContext = createContext<GuardContext>({
    guardWrapper: null
});

const GuardProvider = ({ children }) => {

    const { web3, chainId, account } = useContext(Web3ModalContext);
    const [ guardWrapper, setGuardWrapper ] = useState<GuardWrapper | null>(null);

    useEffect(() => {
        if (web3 && chainId && account) {
            try{
                const _guardWrapper = new GuardWrapper(web3, chainId, account);
                setGuardWrapper(_guardWrapper);
            } catch (error) {
                console.log(error);
            }
        } else {
            setGuardWrapper(null);
        }
    }, [web3, chainId, account]);

    return(
        <GuardContext.Provider value={{ guardWrapper }}>
            {children}
        </GuardContext.Provider>
    );
}

export default GuardProvider;