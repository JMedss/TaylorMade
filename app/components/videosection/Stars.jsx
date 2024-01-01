import Image from "next/image"

const Stars = () => {
  return (
    <span className="flex mx-1">
        <Image
        src="/star.svg"
        width={10}
        height={10}
        alt=""
        />
        <Image
        src="/star.svg"
        width={10}
        height={10}
        alt=""
        />
        <Image
        src="/star.svg"
        width={10}
        height={10}
        alt=""
        />
        <Image
        src="/star.svg"
        width={10}
        height={10}
        alt=""
        />
        <Image
        src="/star.svg"
        width={10}
        height={10}
        alt=""
        />
    </span>
  )
}

export default Stars
