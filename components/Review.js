import React from 'react'
import Image from "next/legacy/image"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Review = () => {
  return (
    <div id='review'>
        <h2>Reviews</h2>
        <div className="review-container">
            <div className="review-item">
                <div className="review-image">
                <Image layout="fill" objectFit="cover" src="/Bruce_Wayne.jpg" />
                </div>
                <div className="review-person">Bruce Wayne</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eum libero rerum sapiente praesentium fugiat magnam aspernatur iste nihil nam!</p>
                <div className="ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
            </div>
            <div className="review-item">
                <div className="review-image">
                <Image layout="fill" objectFit="cover" src="/clark_kent.jpeg" />
                </div>
                <div className="review-person">Clark Kent</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eum libero rerum sapiente praesentium fugiat magnam aspernatur iste nihil nam!</p>
                <div className="ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
            </div>
            <div className="review-item">
                <div className="review-image">
                <Image layout="fill" objectFit="cover" src="/Tony-Stark.jpg" />
                </div>
                <div className="review-person">Tony Stark</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eum libero rerum sapiente praesentium fugiat magnam aspernatur iste nihil nam!</p>
                <div className="ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
            </div>
            <div className="review-item">
                <div className="review-image">
                <Image layout="fill" objectFit="cover" src="/steve-rogers.jpg" />
                </div>
                <div className="review-person">Steve Rogers</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eum libero rerum sapiente praesentium fugiat magnam aspernatur iste nihil nam!</p>
                <div className="ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
            </div>
            <div className="review-item">
                <div className="review-image">
                <Image layout="fill" objectFit="cover" src="/james-bond.jpeg" />
                </div>
                <div className="review-person">James Bond</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eum libero rerum sapiente praesentium fugiat magnam aspernatur iste nihil nam!</p>
                <div className="ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
            </div>
            <div className="review-item">
                <div className="review-image">
                <Image layout="fill" objectFit="cover" src="/Ethan-Hunt.jpeg" />
                </div>
                <div className="review-person">Ethan Hunt</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eum libero rerum sapiente praesentium fugiat magnam aspernatur iste nihil nam!</p>
                <div className="ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Review