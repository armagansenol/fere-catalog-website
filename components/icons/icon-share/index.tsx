import React from "react"

type Props = {
  fill?: string
  rotate?: number
}

const IconShare = ({ fill = "red", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg height="100%" width="100%" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0001 9.69015C9.73074 9.69004 9.46418 9.74876 9.21649 9.86277C8.96881 9.97678 8.74514 10.1437 8.55899 10.3535L3.93454 7.5497C4.02411 7.18721 4.02411 6.80578 3.93454 6.44329L8.55899 3.63953C8.89574 4.01574 9.34823 4.24675 9.83169 4.28926C10.3151 4.33178 10.7964 4.18289 11.1853 3.87049C11.5742 3.55808 11.8441 3.1036 11.9443 2.59219C12.0446 2.08077 11.9683 1.54751 11.7299 1.09231C11.4915 0.637106 11.1072 0.291193 10.6491 0.119375C10.191 -0.0524436 9.69049 -0.0383788 9.24131 0.158934C8.79213 0.356247 8.42512 0.72327 8.20904 1.19124C7.99296 1.65922 7.94264 2.19603 8.06749 2.70112L3.44303 5.50488C3.1668 5.19452 2.81071 4.98031 2.42057 4.88982C2.03043 4.79933 1.62409 4.83669 1.25382 4.9971C0.88355 5.15751 0.566287 5.43363 0.342844 5.78995C0.119401 6.14626 0 6.56646 0 6.99649C0 7.42653 0.119401 7.84673 0.342844 8.20304C0.566287 8.55936 0.88355 8.83548 1.25382 8.99589C1.62409 9.1563 2.03043 9.19366 2.42057 9.10317C2.81071 9.01268 3.1668 8.79847 3.44303 8.48811L8.06749 11.2919C7.96027 11.7268 7.98213 12.1871 8.12999 12.608C8.27786 13.0289 8.54432 13.3894 8.89197 13.6388C9.23962 13.8882 9.65102 14.0141 10.0684 13.9987C10.4859 13.9834 10.8883 13.8276 11.2194 13.5532C11.5505 13.2788 11.7935 12.8996 11.9144 12.4688C12.0353 12.038 12.028 11.5773 11.8935 11.1512C11.759 10.7251 11.5041 10.3551 11.1645 10.093C10.8249 9.83099 10.4177 9.69011 10.0001 9.69015Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconShare