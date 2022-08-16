import GuardStakingWrapper from "../../blockchain/GuardStakingWrapper";
import { createContext, useEffect, useState, useContext } from "react";
import { Web3ModalContext } from "../Web3ModalProvider";

interface GuardStakingContext{
    guardStakingWrapper: GuardStakingWrapper | null;
}

export const GuardStakingContext = createContext<GuardStakingContext>({
    guardStakingWrapper: null
});

const GuardStakingProvider = ({ children }) => {

    const { web3, chainId, account } = useContext(Web3ModalContext);
    const [ guardStakingWrapper, setGuardStakingWrapper ] = useState<GuardStakingWrapper | null>(null);

    useEffect(() => {
        if (web3 && chainId && account) {
            try{
                const _guardStakingWrapper = new GuardStakingWrapper(web3, chainId, account);
                setGuardStakingWrapper(_guardStakingWrapper);
            } catch (error) {
                console.log(error);
            }
        } else {
            setGuardStakingWrapper(null);
        }
    } , [web3, chainId, account]);

    return(
        <GuardStakingContext.Provider value={{ guardStakingWrapper }}>
            {children}
        </GuardStakingContext.Provider>
        );
        
}

export default GuardStakingProvider;
