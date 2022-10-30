import { useUserChainIdManager } from 'state/user/hooks'

const useSwitchUserChainId = () => {
  const [userChainId, setUserChainId] = useUserChainIdManager()
  return { userChainId, setUserChainId }
}

export default useSwitchUserChainId
