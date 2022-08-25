import BountyWrapper from "../../blockchain/BountyWrapper";
import { createContext, useEffect, useState, useContext } from "react";
import { Web3ModalContext } from "../Web3ModalProvider";

interface BountyContext {
    bountyWrapper: BountyWrapper | null;
}

export const BountyContext = createContext<BountyContext>({
    bountyWrapper: null
});

const BountyProvider = ({ children }) => {

    const { web3, chainId, account } = useContext(Web3ModalContext);
    const [bountyWrapper, setBountyWrapper] = useState<BountyWrapper | null>(null);

    useEffect(() => {
        if (web3 && chainId && account) {
          try {
            const _bountyWrapper = new BountyWrapper(web3, chainId, account);
            setBountyWrapper(_bountyWrapper);
            } catch (error) {
                console.log(error);
                }
        }
        else {
            setBountyWrapper(null);
        }
    } , [web3, chainId, account]);

    return (
        <BountyContext.Provider value={{ bountyWrapper }}>
            {children}
        </BountyContext.Provider>
    );
}

export default BountyProvider;