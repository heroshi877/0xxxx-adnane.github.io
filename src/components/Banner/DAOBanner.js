import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled/macro'
import mq from 'mediaQuery'
import { useTranslation } from 'react-i18next'
import Arrow from './images/Arrow.svg'
import ENSIcon from './images/ENSIcon.svg'

const SHOULD_DELEGATE_QUERY = gql`
  query shouldDelegateQuery @client {
    shouldDelegate
  }
`



export function DAOBannerContent() {
  const { t } = useTranslation()
  const {
    data: { shouldDelegate }
  } = useQuery(SHOULD_DELEGATE_QUERY)

  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={
        shouldDelegate
          ? 'https://claim.ens.domains/delegate-ranking'
          : 'https://constitution.ens.domains/'
      }
    >
      <LogoSmall $daoGradient={!shouldDelegate} src={ENSIcon} alt="ENS logo" />
      <BannerContentWrapper>
        <BannerTitle>
          {shouldDelegate
            ? t('banners.undelegatedTokens.title')
            : t('banners.constitution.title')}
        </BannerTitle>
        <BannerContent>
          {shouldDelegate
            ? t('banners.undelegatedTokens.description')
            : t('banners.constitution.description')}
        </BannerContent>
      </BannerContentWrapper>
      <ArrowSmall src={Arrow} alt="Arrow right icon" />
    </Link>
  )
}
