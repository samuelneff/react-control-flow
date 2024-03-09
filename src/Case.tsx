
interface Props {
  value: any;
  children: any;
}
export default function Case({ children }: Props) {
  return children === undefined ? null : children;
}
