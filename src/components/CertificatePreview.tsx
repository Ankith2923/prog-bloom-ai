import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Share2, ExternalLink } from "lucide-react";

export const CertificatePreview = () => {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Earn verified certificates powered by blockchain technology and AI validation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Certificate Preview */}
            <div className="relative">
              <Card className="bg-gradient-card border-border/50 shadow-elegant overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Certificate of Completion</h3>
                    <p className="text-muted-foreground">This certifies that</p>
                  </div>

                  <div className="text-center mb-6">
                    <h4 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                      John Doe
                    </h4>
                    <p className="text-muted-foreground mb-4">has successfully completed</p>
                    <h5 className="text-xl font-semibold mb-2">JavaScript Fundamentals</h5>
                    <p className="text-sm text-muted-foreground">
                      Advanced course covering ES6+, DOM manipulation, and modern JavaScript patterns
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-sm text-muted-foreground border-t border-border/50 pt-4">
                    <div>
                      <p>Issued: March 15, 2024</p>
                      <p>ID: #CJS2024-001234</p>
                    </div>
                    <div className="text-right">
                      <p>Score: 95%</p>
                      <p>Duration: 6 weeks</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Badge variant="secondary" className="bg-learning-green/20 text-learning-green">
                      Verified
                    </Badge>
                    <Badge variant="secondary" className="bg-learning-blue/20 text-learning-blue">
                      Blockchain Secured
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-learning-purple/30 rounded-full blur-sm animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-learning-blue/30 rounded-full blur-sm animate-float" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Certificate Features */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Our Certificates Matter</h3>
                <p className="text-muted-foreground mb-6">
                  Industry-recognized certificates with advanced verification and AI-powered assessment validation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-learning-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-learning-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Industry Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Accepted by 500+ companies and validated by industry experts
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-learning-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-learning-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Blockchain Verification</h4>
                    <p className="text-sm text-muted-foreground">
                      Tamper-proof certificates stored on blockchain for lifetime verification
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-learning-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-5 h-5 text-learning-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Easy Sharing</h4>
                    <p className="text-sm text-muted-foreground">
                      Share directly to LinkedIn, GitHub, or download high-quality PDFs
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Download Sample
                </Button>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};