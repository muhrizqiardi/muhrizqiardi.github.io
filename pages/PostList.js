import Link from 'next/link'
import MultiClamp from 'react-multi-clamp';

function PostList(props) {
	return (
		<>
			{(
				<Link href="#" passHref>
					<a href="#">
						<div className="post">
							<img src="/thumbnail/example.jpg" className="thumbnail" alt="" />
							<div className="desc">
								<h1 className="title">
									<MultiClamp ellipsis="..." clamp={2}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat libero non impedit quibusdam, quo, rerum debitis ratione sequi et animi asperiores laudantium minima. Delectus, dicta id. Quam dolorum provident aliquid modi impedit inventore libero, vero reprehenderit sint voluptas. Aut!
									</MultiClamp>
                  </h1>
								<p>
									<MultiClamp ellipsis="..." clamp={3}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat libero non impedit quibusdam, quo, rerum debitis ratione sequi et animi asperiores laudantium minima. Delectus, dicta id. Quam dolorum provident aliquid modi impedit inventore libero, vero reprehenderit sint voluptas. Aut!
									</MultiClamp>
								</p>
							</div>
						</div>
					</a>
				</Link>
			)}
			<Link href="#" passHref>
				<a href="#">
					<div className="post">
						<img src="/thumbnail/example.jpg" className="thumbnail" alt="" />
						<div className="desc">
							<h1 className="title">
								<MultiClamp ellipsis="..." clamp={2}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat libero non impedit quibusdam, quo, rerum debitis ratione sequi et animi asperiores laudantium minima. Delectus, dicta id. Quam dolorum provident aliquid modi impedit inventore libero, vero reprehenderit sint voluptas. Aut!
									</MultiClamp>
							</h1>
							<p>
								<MultiClamp ellipsis="..." clamp={3}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat libero non impedit quibusdam, quo, rerum debitis ratione sequi et animi asperiores laudantium minima. Delectus, dicta id. Quam dolorum provident aliquid modi impedit inventore libero, vero reprehenderit sint voluptas. Aut!
									</MultiClamp>
							</p>
						</div>
					</div>
				</a>
			</Link>
			<Link href="#" passHref>
				<a href="#">
					<div className="post">
						<img src="/thumbnail/example.jpg" className="thumbnail" alt="" />
						<div className="desc">
							<h1 className="title">
								<MultiClamp ellipsis="..." clamp={2}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat libero non impedit quibusdam, quo, rerum debitis ratione sequi et animi asperiores laudantium minima. Delectus, dicta id. Quam dolorum provident aliquid modi impedit inventore libero, vero reprehenderit sint voluptas. Aut!
									</MultiClamp>
							</h1>
							<p>
								<MultiClamp ellipsis="..." clamp={3}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat libero non impedit quibusdam, quo, rerum debitis ratione sequi et animi asperiores laudantium minima. Delectus, dicta id. Quam dolorum provident aliquid modi impedit inventore libero, vero reprehenderit sint voluptas. Aut!
									</MultiClamp>
							</p>
						</div>
					</div>
				</a>
			</Link>
			<Link href="#" passHref>
				<a href="#">
					<div className="post">
						<img src="/thumbnail/example.jpg" className="thumbnail" alt="" />
						<div className="desc">
							<h1 className="title">
								<MultiClamp ellipsis="..." clamp={2}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat libero non impedit quibusdam, quo, rerum debitis ratione sequi et animi asperiores laudantium minima. Delectus, dicta id. Quam dolorum provident aliquid modi impedit inventore libero, vero reprehenderit sint voluptas. Aut!
									</MultiClamp>
							</h1>
							<p>
								<MultiClamp ellipsis="..." clamp={3}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat libero non impedit quibusdam, quo, rerum debitis ratione sequi et animi asperiores laudantium minima. Delectus, dicta id. Quam dolorum provident aliquid modi impedit inventore libero, vero reprehenderit sint voluptas. Aut!
									</MultiClamp>
							</p>
						</div>
					</div>
				</a>
			</Link>
			<Link href="#" passHref>
				<a href="#">
					<div className="post">
						<img src="/thumbnail/example.jpg" className="thumbnail" alt="" />
						<div className="desc">
							<h1 className="title">
								<MultiClamp ellipsis="..." clamp={2}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat libero non impedit quibusdam, quo, rerum debitis ratione sequi et animi asperiores laudantium minima. Delectus, dicta id. Quam dolorum provident aliquid modi impedit inventore libero, vero reprehenderit sint voluptas. Aut!
									</MultiClamp>
							</h1>
							<p>
								<MultiClamp ellipsis="..." clamp={3}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat libero non impedit quibusdam, quo, rerum debitis ratione sequi et animi asperiores laudantium minima. Delectus, dicta id. Quam dolorum provident aliquid modi impedit inventore libero, vero reprehenderit sint voluptas. Aut!
									</MultiClamp>
							</p>
						</div>
					</div>
				</a>
			</Link>

		</>
	);
}
export default PostList;
