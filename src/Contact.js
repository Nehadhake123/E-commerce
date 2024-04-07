import styled from "styled-components";

export const Contact = () => {
    const Wrapper = styled.section`
          padding: 9rem 0 5rem 0;
          text-align: center;
      
          .container {
            margin-top: 6rem;
      
            .contact-form {
              max-width: 50rem;
              margin: auto;
      
              .contact-inputs {
                display: flex;
                flex-direction: column;
                gap: 3rem;
      
                input[type="submit"] {
                  cursor: pointer;
                  transition: all 0.2s;
      
                  &:hover {
                    background-color: ${({ theme }) => theme.colors.white};
                    border: 1px solid ${({ theme }) => theme.colors.btn};
                    color: ${({ theme }) => theme.colors.btn};
                    transform: scale(0.9);
                  }
                }

                input[type="text"],
                input[type="email"],
                textarea {
                  text-transform: none; /* Ensure text is not automatically capitalized */
                }
              }
            }
          }
        `;
    return (
        <Wrapper>
            <h2 className="common-heading">Contact page</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.398331264599!2d73.75723990000002!3d18.6011451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9dc4ce5ac9f%3A0x7fdeb0087efc3a7f!2sPhoenix%20Mall%20of%20the%20Millennium!5e0!3m2!1sen!2sin!4v1710925978276!5m2!1sen!2sin" width="100%" height="400"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/xvoebbvr" method="POST" className="contact-inputs">
                        <input type="text" placeholder="username" name="username" required autoComplete="off" />

                        <input type="email" name="Email" placeholder="Email" autoComplete="off" required />

                        <textarea name="Message" placeholder="Enter Your Message" cols="30" rows="10" required autoComplete="off"></textarea>

                        <input type="submit" value="Send"/>

                    </form>
                </div>
            </div>
        </Wrapper>
    )
}