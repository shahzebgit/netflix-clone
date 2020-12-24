import {
  Spinner,
  Picture,
  LockBody,
  ReleaseBody,
} from "./styles/loading-styles.js";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
